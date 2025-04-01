import { ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb'
import { docClient } from '../../lib/dynamodb'
import { v4 as uuidv4 } from 'uuid'
import { corsHeaders, corsResponse } from '../../lib/cors'

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  })
}

export async function GET() {
  try {
    const command = new ScanCommand({
      TableName: process.env.AWS_DATABASE_TABLE,
    })

    const response = await docClient.send(command)
    return corsResponse(Response.json({ items: response.Items || [] }))
  } catch (error) {
    return corsResponse(Response.json({ error: error.message }))
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const now = new Date().toISOString()

    // Create a new item with required fields and any additional data
    const item = {
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
      ...body  // Spread any additional fields from the request body
    }

    const command = new PutCommand({
      TableName: process.env.AWS_DATABASE_TABLE,
      Item: item,
    })

    await docClient.send(command)
    return corsResponse(Response.json(item))
  } catch (error) {
    return corsResponse(Response.json({ error: error.message }))
  }
} 