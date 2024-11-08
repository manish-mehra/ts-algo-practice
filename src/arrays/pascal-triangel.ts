export function generate(numRows: number): number[][] {

  const pascalTri = [[1]]

  for (let i = 1; i < numRows; i++) {
    const prevRow = [...pascalTri[pascalTri.length - 1]]
    prevRow.unshift(0)
    prevRow.push(0)
    const newRow = []

    for (let j = 0; j < prevRow.length - 1; j++) {
      const newVal = prevRow[j] + prevRow[j + 1]
      newRow.push(newVal)
    }
    pascalTri.push(newRow)
  }

  return pascalTri
}
