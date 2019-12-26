# Bucks service directory

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d6cba44-f32a-4d80-80f0-5bcbb2742b0f/deploy-status)](https://app.netlify.com/sites/bucks-service-directory/deploys)

**[On the web here](https://bucks-service-directory.netlify.com/)**

A community service directory for Buckinghamshire.

It's a standard client-rendered React app that consumes data from an API.

## Prerequisites

`node` and `npm`

## Running it locally

1. `npm i`
2. `npm run dev`

## Running it on the web

It's suitable for deployment to free static hosts, especially Netlify.

## Config

It looks for these environment variables:

- `REACT_APP_API_HOST`: the location of the backing API, with protocol included
- `REACT_APP_GOOGLE_CLIENT_KEY`: for using mapping functionality.
- `REACT_APP_GA_PROPERTY_ID`: for Google Analytics