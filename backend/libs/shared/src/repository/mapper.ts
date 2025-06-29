export abstract class Mapper<T, K> {
  /**
   * Converts a domain entity to a persistence document.
   * @param entity - The domain entity to be converted.
   * @returns The corresponding persistence document.
   */
  abstract domain2Persistance(entity: T): K;

  /**
   * Converts a persistence document to a domain entity.
   * @param document - The persistence document to be converted.
   * @returns The corresponding domain entity.
   */
  abstract persistance2Domain(document: K): Promise<T>;
}
