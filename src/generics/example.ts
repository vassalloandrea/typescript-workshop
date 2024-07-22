import fs from 'fs/promises'

export async function fetchData(path: any): Promise<any> {
  try {
    const data = await fs.readFile(`${__dirname}/${path}`)
    return JSON.parse(data.toString())
  } catch (error) {
    console.log('Error: ', error)

    return []
  }
}
