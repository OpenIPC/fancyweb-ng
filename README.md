![OpenIPC logo][logo]

## FancyWeb-NG

**_New generation of FancyWeb interface_**

### Rules

- All this collective work of ours is carried out **only through PR**, direct commits are blocked.
- All the dirty day-to-day work is done in the **dev** branch.
- All builds and automatic deployment are performed from the **deploy** branch.
- In the **main** branch, after all tests, only the pure source of truth is stored.

### Running

Clone the repo and go into it:
```
git clone https://github.com/openipc/fancyweb-ng
cd fancyweb-ng
```

Install Node.js.
Enable Corepack.

Install dependencies: `yarn install`
Run main site development: `yarn run dev-main`
Run cameras' site development: `yarn run dev-camera`
Run Storybook: `yarn run storybook`

Builds are being preparing and be ready soon. Wait a bit.

## Alternative development way with docker
Run compose: `docker compose up`

### Technical support and donations

Please **_[support our project](https://openipc.org/support-open-source)_** with donations or orders for development or maintenance. Thank you!


[logo]: https://openipc.org/assets/openipc-logo-black.svg
