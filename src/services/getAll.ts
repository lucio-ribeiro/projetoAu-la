import openDB from "../database/sqlite";

async function getAll(): Promise<string | undefined> {
  try {
    const db = await openDB();
    const result = await db.get("SELECT nome FROM alunos");
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
  return undefined;
}

function teste(): void {
  console.log("teste");
}

export default getAll;
