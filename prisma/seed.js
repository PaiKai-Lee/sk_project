import { PrismaClient } from '@prisma/client'
/** import */
const prisma = new PrismaClient()

async function main() {
  const superAdmin = {
    name: 'superAdmin',
    password: '66666666',
    email: 'superAdmin@sk.com',
    role: "SuperAdmin",
    department: "SuperAdmin"
  }
  await prisma.user.create({
    data: superAdmin
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })