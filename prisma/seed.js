import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
console.log(prisma,'prisma instance created')

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "test@test123.com",
      name: "Athee",
      password: "1234",
    },
  });

  console.log(newUser);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
