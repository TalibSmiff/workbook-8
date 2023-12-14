"use strict"

async function getImages() {
  let response = await fetch("https://api.waifu.im/search?included_tags=maid&height=>=2000")
  let images = response.json()
}