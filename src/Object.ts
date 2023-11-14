async function processItems(items: string[]): Promise<string[]> {
    const results: string[] = [];
  
    items.forEach(async (item) => {
      const processedItem = await processItem(item);
      results.push(processedItem);
    });
  
    return results;
  }