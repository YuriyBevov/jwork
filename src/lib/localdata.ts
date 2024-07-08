import fsPromises from 'fs/promises';
import path from 'path';

export async function getLocalData(url: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const filePath = path.join(process.cwd(), url);
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return data;
}
