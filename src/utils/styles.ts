export const cns = (...classes: (string | false | undefined | null)[]): Record<string, any> => ({
  $$css: true,
  _: classes.filter(Boolean).join(' ') as unknown as string[]
})
