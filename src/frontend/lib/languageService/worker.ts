export type LanguageServiceRequest = LexRequest | ParseRequest;
interface LexRequest {
  type: 'lex';
  text: string;
}
interface ParseRequest {
  type: 'parse';
  text: string;
}

export type LanguageServiceResponse = null;

self.onmessage = (event: MessageEvent<LanguageServiceRequest>) => {
  const request = event.data;

  // Expensive work
  //   const result = numbers.reduce((sum, n) => sum + n, 0);
  //
  //   self.postMessage(result);
};
