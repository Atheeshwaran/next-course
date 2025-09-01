import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.upsert({
    where: { email: "test@test123.com" },
    update: {},
    create: {
      email: "test@test123.com",
      name: "Athee",
      password: "1234",
    },
  });

  const course = await prisma.course.upsert({
    where: { title: "New Course" },
    update: {},
    create: {
      title: "New Course",
      description: "This is a new course",
      topics: ["Topic1", "Topic2"],
      sessions: ["Session 1", "Session 2"],
      },
  });

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
