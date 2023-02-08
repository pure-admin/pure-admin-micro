<h1>pure-admin-micro</h1>

# in development...

**English** | [中文](./README.md)

## Introduction

The official micro frontend of `pure-admin-micro` integrates [MicroApp](https://micro-zoe.github.io/micro-app/), [qiankun](https://qiankun.umijs.org/zh) 、[wujie](https://wujie-micro.github.io/doc/) Three micro front-end frameworks, users can choose a micro front-end framework for development

## Usage

### Install dependencies

```sh
pnpm install
```

### Run the project

`MicroApp` version

```sh
pnpm micro-app:dev
```

`qiankun` version

```sh
pnpm qiankun:dev
```

`wujie` version

```sh
pnpm wujie:dev
```

### Remove all `node-node_modules` files

`linux`、`mac`

```sh
pnpm linux:clean:node_modules
```

`windows`

```sh
pnpm win:clean:node_modules
```

## main directory structure

```
├── packages                          # Applications
│   ├── main-apps                     # Main application, Dock application
│   │   ├── pure-admin-micro-app      # MicroApp micro frontend framework version
│   │   ├── pure-admin-qiankun        # qiankun micro frontend framework version
│   │   ├── pure-admin-wujie          # wujie micro frontend framework version
│   ├── sub-apps                      # sub-apps, micro-apps
│   │   ├── micro-app                 # MicroApp micro frontend framework version
│   │   │   ├── react-vite            # react-vite application
│   │   │   ├── vue2                  # vue2 application
│   │   │   ├── vue3                  # vue3 application
│   │   │   ├── vue3-vite             # vue3-vite application
│   │   ├── qiankun                   # qiankun micro frontend framework version
│   │   │   ├── react-vite            # react-vite application
│   │   │   ├── vue2                  # vue2 application
│   │   │   ├── vue3                  # vue3 application
│   │   │   ├── vue3-vite             # vue3-vite application
│   │   ├── wujie                     # wujie micro frontend framework version
│   │   │   ├── react-vite            # react-vite application
│   │   │   ├── vue2                  # vue2 application
│   │   │   ├── vue3                  # vue3 application
│   │   │   ├── vue3-vite             # vue3-vite application
```

Main application and base application are developed using [pure-admin-thin](https://github.com/xiaoxian521/pure-admin-thin), sub-applications and micro-applications provide `react-vite`, `vue2`, `vue3` , `vue3-vite` version demo
