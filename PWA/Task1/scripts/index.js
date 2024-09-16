let installPrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installButton.removeAttribute("hidden");
  }); 

const btn = document.getElementById("installBtn")

btn.addEventListener("click",async()=>{
    if (!installPrompt) {
        return;
      }
      const result = await installPrompt.prompt();
      console.log(`Install prompt was: ${result.outcome}`);
      disableInAppInstallPrompt();
})

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});



function disableInAppInstallPrompt() {
    installPrompt = null;
    installButton.setAttribute("hidden", "");
}

