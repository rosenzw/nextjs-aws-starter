import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'

export async function GET() {
  try {
    const client = new S3Client({ region: process.env.AWS_REGION })
    const command = new ListObjectsV2Command({
      Bucket: process.env.AWS_BUCKET_NAME,
    })

    const response = await client.send(command)
    return Response.json({ objects: response.Contents || [] })
  } catch (error) {
    return Response.json({ error: error.message })
  }
} 