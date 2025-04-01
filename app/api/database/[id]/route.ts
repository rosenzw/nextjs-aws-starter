import { DeleteCommand } from '@aws-sdk/lib-dynamodb'
import { docClient } from '../../../lib/dynamodb'
import { corsHeaders, corsResponse } from '../../../lib/cors'

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  })
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const command = new DeleteCommand({
      TableName: process.env.AWS_DATABASE_TABLE,
      Key: {
        id: params.id,
      },
    })

    await docClient.send(command)
    return corsResponse(Response.json({ success: true }))
  } catch (error) {
    return corsResponse(Response.json({ error: error.message }))
  }
} 