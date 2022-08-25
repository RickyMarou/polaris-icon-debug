# polaris-icon-debug
Example of a typescript error with polaris 10.0.0 and polaris icons 5.4.0

Run `yarn types:check` to see the error:

```
Type 'FunctionComponent<SVGProps<SVGSVGElement>>' is not assignable to type 'IconSource'.
  Type 'React.FunctionComponent<React.SVGProps<SVGSVGElement>>' is not assignable to type 'import("/Users/marwan/random-repos/polaris-icons-debug/node_modules/@shopify/polaris/node_modules/@types/react/index").FunctionComponent<import("/Users/marwan/random-repos/polaris-icons-debug/node_modules/@shopify/polaris/node_modules/@types/react/index").SVGProps<SVGSVGElement>>'.
    Types of parameters 'props' and 'props' are incompatible.
      Type 'PropsWithChildren<SVGProps<SVGSVGElement>>' is not assignable to type 'SVGProps<SVGSVGElement>'.
        Types of property 'children' are incompatible.
          Type 'import("/Users/marwan/random-repos/polaris-icons-debug/node_modules/@shopify/polaris/node_modules/@types/react/index").ReactNode' is not assignable to type 'React.ReactNode'.
            Type '{}' is not assignable to type 'ReactNode'.

8     <Icon source={AddMajor} />
```
