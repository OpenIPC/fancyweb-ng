![OpenIPC logo][logo]

## FancyWeb-NG

**_New generation of FancyWeb interface_**

### Rules

- All this collective work of ours is carried out **only through PR**, direct commits are blocked.
- All the dirty day-to-day work is done in the **dev** branch.
- All builds and automatic deployment are performed from the **deploy** branch.

### Running

Clone the repo and go into it:
```
git clone https://github.com/openipc/fancyweb-ng
cd fancyweb-ng
```

Install Node.js with version 24 and higher.

### Run dev server
```shell
    npm install
    npm run dev-main
```

### Or run dev server with Docker
You can use convenient docker development approach, in root `fancyweb-ng` dir execute shell command:
``` shell
docker compose -f docker/docker-compose.yaml up --watch
```
Open your browser and load URL: `localhost:5173`
You can edit source files and development server will react to every change and update data in browser.


Builds are being preparing and be ready soon. Wait a bit.

### Technical support and donations

Please **_[support our project](https://openipc.org/support-open-source)_** with donations or orders for development or maintenance. Thank you!


[logo]: https://openipc.org/assets/openipc-logo-black.svg
