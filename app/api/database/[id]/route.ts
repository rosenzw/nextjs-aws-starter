import { DeleteCommand } from '@aws-sdk/lib-dynamodb'
import { docClient } from '../../../lib/dynamodb'

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const command = new DeleteCommand({
      TableName: process.env.AWS_DATABASE_TABLE,
      Key: {
        id: (await params).id,
      },
    })

    await docClient.send(command)
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: error.message })
  }
} 