/*
import { DateTime } from 'luxon';
import { ValueTransformer } from 'typeorm';

// To standardise, all entities with Date, DateTime type columns should have DateTransformer.
export class DateTransformer implements ValueTransformer {
  // From database to JavaScript
  from(value: Date): Date {
    console.log('🚀 ~ DateTransformer ~ from ~ value:', value);
    return value;
  }

  // From JavaScript to database
  // Used by HTTP REST API call, e.g. IWPSMockDataController.
  // Input value with string type occurs for HTTP REST API call, e.g. '2024-03-25'.
  // Input value with Date type occurs for everything else.
  to(value: string | Date): Date {
    console.log('🚀 ~ DateTransformer ~ to ~ value:', value);
    if (typeof value !== 'string') {
      return value;
    }
    // Same approach for `date-scalar.ts parseValue` function.
    // Given date string input value '2024-03-25', the output JSDate will be '2024-03-24T16:00:00.000Z' in UTC,
    // and will pass to DB as '2024-03-25' date type without timezone (implicit SGT) as expected.
    return DateTime.fromISO(value).toJSDate();
  }
}
*/
import { ValueTransformer } from 'typeorm';

export class DateTransformer implements ValueTransformer {
  to(value: Date | null): Date | null {
    return value ? new Date(value.toISOString().split('T')[0]) : null;
  }

  from(value: string | null): Date | null {
    return value ? new Date(value) : null;
  }
}
