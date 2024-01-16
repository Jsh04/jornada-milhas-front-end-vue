export const greaterThan18 = (value: string) => {
    if(value != ''){
      const dataAtual: Date = new Date();
      const dataEntrada = new Date(value);
      const dataMais18 = new Date(dataEntrada.getUTCFullYear() + 18, dataEntrada.getUTCMonth(), dataEntrada.getUTCDate())
      return dataAtual >=  dataMais18;
    }
      return true;
} 