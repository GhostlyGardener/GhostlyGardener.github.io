(function () {
  function formatTime(value) {
    if (!Number.isFinite(value)) return "0:00";
    const totalSeconds = Math.max(0, Math.floor(value));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return minutes + ":" + String(seconds).padStart(2, "0");
  }

  function pauseOtherPlayers(activeAudio) {
    document.querySelectorAll(".gg-audio-native").forEach(function (audio) {
      if (audio !== activeAudio && !audio.paused) audio.pause();
    });
  }

  function setupPlayer(player) {
    const audio = player.querySelector(".gg-audio-native");
    const button = player.querySelector(".gg-audio-toggle");
    const icon = button.querySelector("i");
    const seek = player.querySelector(".gg-audio-seek");
    const current = player.querySelector(".gg-audio-current");
    const duration = player.querySelector(".gg-audio-duration");
    const status = player.querySelector(".gg-audio-status");
    let seeking = false;
    let loading = false;
    let blobUrl = "";

    function updateIcon() {
      icon.className = audio.paused ? "ti ti-player-play-filled" : "ti ti-player-pause-filled";
      button.setAttribute("aria-label", audio.paused ? "Play" : "Pause");
    }

    function updateSeek() {
      if (!seeking && Number.isFinite(audio.duration) && audio.duration > 0) {
        seek.value = String(Math.round((audio.currentTime / audio.duration) * 1000));
      }
      current.textContent = formatTime(audio.currentTime);
      duration.textContent = formatTime(audio.duration);
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function ensureAudioSource() {
      if (audio.src) return Promise.resolve();
      if (loading) return Promise.reject(new Error("Audio is still loading."));

      const src = audio.dataset.src;
      if (!src) return Promise.reject(new Error("Audio source is missing."));

      loading = true;
      setStatus("Loading...");

      return fetch(src, { cache: "force-cache" })
        .then(function (response) {
          if (!response.ok) throw new Error("Audio request failed: " + response.status);
          return response.blob();
        })
        .then(function (blob) {
          if (blobUrl) URL.revokeObjectURL(blobUrl);
          blobUrl = URL.createObjectURL(blob);
          audio.src = blobUrl;
          audio.load();
          setStatus("");
        })
        .finally(function () {
          loading = false;
        });
    }

    button.addEventListener("click", function () {
      if (audio.paused) {
        pauseOtherPlayers(audio);
        ensureAudioSource()
          .then(function () {
            const playPromise = audio.play();
            if (playPromise && typeof playPromise.catch === "function") {
              return playPromise;
            }
            return null;
          })
          .catch(function (error) {
            setStatus(error.message || "Audio playback failed.");
            updateIcon();
          });
      } else {
        audio.pause();
      }
    });

    seek.addEventListener("input", function () {
      seeking = true;
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        current.textContent = formatTime((Number(seek.value) / 1000) * audio.duration);
      }
    });

    seek.addEventListener("change", function () {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime = (Number(seek.value) / 1000) * audio.duration;
      }
      seeking = false;
      updateSeek();
    });

    audio.addEventListener("loadedmetadata", updateSeek);
    audio.addEventListener("timeupdate", updateSeek);
    audio.addEventListener("play", function () {
      setStatus("");
      updateIcon();
    });
    audio.addEventListener("pause", updateIcon);
    audio.addEventListener("error", function () {
      if (audio.error) setStatus("Audio error " + audio.error.code + ".");
      updateIcon();
    });
    audio.addEventListener("ended", function () {
      seek.value = "0";
      updateIcon();
      updateSeek();
    });

    window.addEventListener("beforeunload", function () {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    });

    updateIcon();
    updateSeek();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".gg-audio-player").forEach(setupPlayer);
  });
})();
