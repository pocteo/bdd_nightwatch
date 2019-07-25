# bdd_nightwatch Installation

    git clone https://github.com/pocteo/bdd_nightwatch.git && cd $(basename $_ .git)
    npm install && npm run test:func
    
To use chrome headless in nightwatch add this arguments

    // nightwatch.json
    ...
    "chromeOptions": {
      ...
      "args": ["--headless"]
    }
    ...
