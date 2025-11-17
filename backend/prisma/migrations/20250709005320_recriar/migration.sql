-- CreateTable
CREATE TABLE "DailyList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "horaRefeicao" TEXT NOT NULL,
    "medicamentos" TEXT NOT NULL,
    "atvRealizadas" TEXT NOT NULL,
    "humorGeral" TEXT NOT NULL,
    "higienePessoal" TEXT NOT NULL,
    "listId" INTEGER NOT NULL,
    CONSTRAINT "DailyList_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
