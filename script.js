const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const resumeInput = document.querySelector("#resumeInput");
const resumeDownload = document.querySelector("#resumeDownload");
let activeResumeUrl;

resumeInput?.addEventListener("change", () => {
  const file = resumeInput.files?.[0];

  if (!file || !resumeDownload) {
    return;
  }

  if (activeResumeUrl) {
    URL.revokeObjectURL(activeResumeUrl);
  }

  activeResumeUrl = URL.createObjectURL(file);
  resumeDownload.href = activeResumeUrl;
  resumeDownload.download = file.name;
  resumeDownload.textContent = "Download Selected Resume";
});
