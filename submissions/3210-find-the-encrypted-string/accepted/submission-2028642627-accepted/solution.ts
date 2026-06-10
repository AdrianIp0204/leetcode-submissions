function getEncryptedString(s: string, k: number): string {
    const l : number = s.length;
    const n : number = k%l;
    return s.slice(n,s.length) + s.slice(0,n)
};
