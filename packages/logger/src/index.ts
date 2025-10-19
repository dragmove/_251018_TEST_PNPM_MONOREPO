export default function Logger(message: string) {
  console.log(`Logger - ${new Date().toISOString()}: ${message}`);
}