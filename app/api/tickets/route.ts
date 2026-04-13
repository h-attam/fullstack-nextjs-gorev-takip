import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// Geçici veri dizisi (Prisma entegrasyonuna kadar hata vermemesi için)
import { mockTickets } from '@/utils/data';

export async function GET() {
  try {
    // GERÇEK DB AKTİF OLDUĞUNDA:
    // const tickets = await prisma.ticket.findMany({ orderBy: { createdAt: 'desc' } });
    
    return NextResponse.json(mockTickets);
  } catch (error) {
    return NextResponse.json({ error: 'Gorevler getirilemedi' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // GERÇEK DB AKTİF OLDUĞUNDA:
    // const newTicket = await prisma.ticket.create({
    //   data: {
    //     title: body.title,
    //     description: body.description,
    //     priority: body.priority,
    //     assignee: body.assignee,
    //   }
    // });

    return NextResponse.json({ message: "Başarılı kayıt", ...body }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Kayit olusturulamadi' }, { status: 500 });
  }
}
