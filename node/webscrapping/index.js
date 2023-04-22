import puppeteer from "puppeteer"
import mongoose from "mongoose"
import fs from "fs"
const Data = mongoose.model("Data", new mongoose.Schema ({
    title: String,
    price: String,
}))

const connect = async () => {


    try {
        const URI = 'mongodb+srv://cdperez85:kjkMUXDH3bKQd9QH@base.tb1vdek.mongodb.net/test'
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to DB 🚀')
    }
    catch (e) {
        console.log(e)
    }



}

const scrape = async () => {


    await connect()

    const url = 'https://www.lacasadeldisco.es/'

    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    })

    const page = await browser.newPage()

    await page.goto(url)

    await page.waitForTimeout(4000)

    await page.waitForSelector('.ui-autocomplete-input')

    await page.type('.ui-autocomplete-input', 'Muse')

    await page.waitForTimeout(1000)

    await page.click('#search_widget > form > button')

    await page.waitForTimeout(2000)

    await page.waitForSelector('#js-product-list')

    const data = await page.$$eval('.product-miniature',(nodes) => {

        return nodes.map((node)=>(
            {
                name: node.querySelector('div.products > div > div > div.ajax_block_product > article > div > div.product-meta > h3 > a').innerHTML,
                image: node.querySelector('#js-product-list > div.products > div > div > div.ajax_block_product > article > div > div.product-image > a > img').src,
            }
        ))

    })

    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
        err ? console.log(error) : null
    })
    

    await browser.close()
}

scrape()