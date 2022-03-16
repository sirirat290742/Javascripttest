const apocalyptic = (n) => {
    let days = `${BigInt(2) ** BigInt(n)}`.indexOf('666');
    return days === -1
      ? 'Crisis averted. Resume sinning.'
      : `Repent! ${days} days until the Apocalypse!`;
  };
 
  console.log(apocalyptic(109)) 
  console.log(apocalyptic(157))
  console.log(apocalyptic(175))
  console.log(apocalyptic(220))
 
  