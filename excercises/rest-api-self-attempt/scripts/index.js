"use strict"
let maid_button = document.querySelector("#maidButton")
let marin_kitagawa_button = document.querySelector("#marin-kitagawaButton")
let mori_calliope_button = document.querySelector("#mori-calliopeButton")
let raiden_shogun_button = document.querySelector("#raiden-shogunButton")
let oppai_button = document.querySelector("#oppaiButton")
let selfies_button = document.querySelector("#selfiesButton")
let uniform_button = document.querySelector("#selfiesButton")


async function getImages() {
  let response = await fetch("https://api.waifu.im/tags")
  let tags =  await response.json()
    for (const tag of tags.versatile) {
      console.log(tag)
    }
}
getImages()