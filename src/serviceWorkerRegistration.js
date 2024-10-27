// serviceWorkerRegistration.js

// This is a basic service worker registration function
export function register(config) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        navigator.serviceWorker
          .register(swUrl)
          .then((registration) => {
            if (registration && registration.onupdatefound) {
              registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker) {
                  installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                      if (navigator.serviceWorker.controller) {
                        console.log(
                          'New content is available; please refresh.'
                        );
                      } else {
                        console.log('Content is cached for offline use.');
                      }
                    }
                  };
                }
              };
            }
          })
          .catch((error) => {
            console.error('Error during service worker registration:', error);
          });
      });
    }
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
  }
  