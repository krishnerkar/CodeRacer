import * as Tip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { Inter } from "@next/font/google";
import styles from "./styles.module.css";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

export const Tooltip = ({
  children,
  text,
  forDisabled,
  sideOffset = 5,
  block,
  delay = true,
}: {
  children: ReactNode;
  text: string;
  forDisabled?: boolean;
  sideOffset?: number;
  block?: boolean;
  delay?: boolean;
}) => {
  if (!text) return <>{children}</>;

  return (
    <Tip.Provider delayDuration={forDisabled || !delay ? 0 : undefined}>
      <Tip.Root>
        {forDisabled ? (
          <Tip.Trigger asChild>
            <div
              tabIndex={0}
              style={{
                display: block ? "block" : "inline",
                cursor: "not-allowed",
              }}
            >
              {children}
            </div>
          </Tip.Trigger>
        ) : (
          <Tip.Trigger asChild>{children}</Tip.Trigger>
        )}
        <Tip.Portal>
          <Tip.Content
            className={styles.TooltipContent}
            sideOffset={sideOffset}
          >
            <Tip.TooltipArrow
              
              className={`${inter.className} ${styles.TooltipArrow} `}
            />
            <p className={inter.className}>{text}</p>
          </Tip.Content>
        </Tip.Portal>
      </Tip.Root>
    </Tip.Provider>
  );
};
