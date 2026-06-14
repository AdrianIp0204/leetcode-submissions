function getEncryptedString(s: string, k: number): string {
    return s.slice(k,s.length) + s.slice(0,k)
};
