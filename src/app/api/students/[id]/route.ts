import { deleteStudentsDb } from '@/db/studentsDb'
import { type NextApiRequest } from 'next/types'

export async function DELETE(
    req: NextApiRequest,
    { params }: { params : { id: number} }
): Promise<Response> {
    const p = await params;
    const studentsId = await p.id;

    const deletedStudentsId = await deleteStudentsDb(studentsId);

    return new Response(JSON.stringify({ deletedStudentsId }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};