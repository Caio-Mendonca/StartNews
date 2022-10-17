import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

const endpoint = prismic.getEndpoint('startcriacao')
const client = prismic.createClient(endpoint, { fetch })

export default client