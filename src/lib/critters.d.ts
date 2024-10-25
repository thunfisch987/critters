declare module 'beasties' {
  import type { Options } from './critters-types'

  export default class Critters {
  /**
   * Create an instance of Critters with custom options.
   * The `.process()` method can be called repeatedly to re-use this instance and its cache.
   */
    constructor(options: Options)
    /**
     * Process an HTML document to inline critical CSS from its stylesheets.
     * @param {string} html String containing a full HTML document to be parsed.
     * @returns {string} A modified copy of the provided HTML with critical CSS inlined.
     */
    process(html: string): Promise<string>
    /**
     * Read the contents of a file from the specified filesystem or disk.
     * Override this method to customize how stylesheets are loaded.
     */
    readFile(filename: string): Promise<string> | string
    /**
     * Given a stylesheet URL, returns the corresponding CSS asset.
     * Overriding this method requires doing your own URL normalization, so it's generally better to override `readFile()`.
     */
    getCssAsset(href: string): Promise<string | undefined> | string | undefined
  }

}
