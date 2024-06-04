// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  };
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate() {
        let randomNum = Math.floor(Math.rand()*4);
        let selectBase = this.dna[randomNum];
        let generateBase = returnRandBase();
        if( selectBase === generateBase) {
          generateBase;
        } else {
          return this.dna[randomNum] = generateBase;
        }
      }
    }
  }
  
  
  //let entry = pAequorFactory(3, ['T', 'A', 'C', 'G']);
  //console.log(entry.mutate());