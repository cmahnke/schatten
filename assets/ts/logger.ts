/**
 * A simple Logger class that provides namespaced logging with configurable log levels.
 * The logger supports four log levels: debug, info, warn, and error. Each log message is prefixed with a styled namespace for better visibility in the console.
 * The log level can be set during instantiation, allowing you to filter out less important messages as needed.
 * Each log entry includes a colored level badge alongside the namespace.
 *
 * Usage:
 * const logger = new Logger('MyApp', 'debug');
 * logger.info('User logged in', { userId: 42 });
 *
 * Custom level colors:
 * const logger = new Logger('MyApp', 'debug', { debug: '#8e44ad', info: '#27ae60' });
 */

type LogLevel = "debug" | "info" | "warn" | "error";

type LevelColorMap = Record<LogLevel, string>;

const DEFAULT_LEVEL_COLORS: LevelColorMap = {
  debug: "#7f8c8d",
  info: "#3498db",
  warn: "#f39c12",
  error: "#e74c3c",
};

export class Logger {
  private readonly levels: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };
  private readonly minLevelPriority: number;

  // Public logging methods initialized as bound function properties
  public readonly debug: (...args: unknown[]) => void;
  public readonly info: (...args: unknown[]) => void;
  public readonly warn: (...args: unknown[]) => void;
  public readonly error: (...args: unknown[]) => void;

  constructor(
    namespace: string = "APP",
    minLevel: LogLevel = "info",
    levelColors: Partial<LevelColorMap> = {},
  ) {
    this.minLevelPriority = this.levels[minLevel] ?? 1;

    // Merge caller-supplied colors over the defaults
    const colors: LevelColorMap = { ...DEFAULT_LEVEL_COLORS, ...levelColors };

    const baseStyle =
      "color: #fff; padding: 2px 5px; border-radius: 3px; font-weight: bold;";
    const resetStyle = "";

    const getBadgeStyle = (bgColor: string) =>
      `background: ${bgColor}; ${baseStyle}`;

    /**
     * Builds the fixed prefix arguments that are prepended to every console call.
     *
     * Output format (two styled badges + reset):
     *   [NAMESPACE] [LEVEL] <user message …>
     */
    const makePrefix = (
      level: LogLevel,
    ): [string, string, string, string, string] => {
      const levelLabel = level.toUpperCase();
      const color = colors[level];
      const format = `%c${namespace}%c %c${levelLabel}%c`;

      return [
        format,
        getBadgeStyle(color),
        resetStyle,
        getBadgeStyle(color),
        resetStyle,
      ];
    };

    // Create bound console methods if they meet the log level threshold
    this.debug = this.shouldLog("debug")
      ? console.debug.bind(console, ...makePrefix("debug"))
      : () => {};

    this.info = this.shouldLog("info")
      ? console.info.bind(console, ...makePrefix("info"))
      : () => {};

    this.warn = this.shouldLog("warn")
      ? console.warn.bind(console, ...makePrefix("warn"))
      : () => {};

    this.error = this.shouldLog("error")
      ? console.error.bind(console, ...makePrefix("error"))
      : () => {};
  }

  private shouldLog(level: LogLevel): boolean {
    return this.levels[level] >= this.minLevelPriority;
  }
}
