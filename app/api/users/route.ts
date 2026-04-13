import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

import { mockUsers } from '@/utils/data';

export async function GET() {
  try {
    // GERÇEK DB AKTİF OLDUĞUNDA:
    // const users = await prisma.user.findMany({ orderBy: { name: 'asc' } });
    
    return NextResponse.json(mockUsers);
  } catch (error) {
    return NextResponse.json({ error: 'Kullanicilar getirilemedi' }, { status: 500 });
  }
}
