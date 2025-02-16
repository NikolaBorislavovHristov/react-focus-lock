import * as React from 'react';

export interface ReactFocusLockProps {
  disabled?: boolean;

  /**
   * if true, will return focus to the previous position on trap disable.
   * Optionally, can pass focus options instead of `true` to control the focus
   * more precisely (ie. `{ preventScroll: true }`)
   */
  returnFocus?: boolean | FocusOptions;

  /**
   * @deprecated Use persistentFocus=false instead
   * enables(or disables) text selection. This also allows not to have ANY focus.
   */
  allowTextSelection?: boolean;

  /**
   * enables of disables "sticky" behavior, when any focusable element shall be focused.
   * This disallow any text selection on the page.
   * @default false
   */
  persistentFocus?: boolean;

  /**
   * enables or disables autoFocusing feature.
   * If enabled - will move focus inside Lock, selecting the first or autoFocusable element
   * If disable - will blur any focus on Lock activation.
   * @default true
   */
  autoFocus?: boolean;

  /**
   * disables hidden inputs before and after the lock.
   */
  noFocusGuards?: boolean | "tail";

  /**
   * named focus group for focus scattering aka combined lock targets
   */
  group?: string;

  className?: string;

  /**
   * life-cycle hook, called on lock activation
   * @param node the observed node
   */
  onActivation?(node: HTMLElement): void;

  /**
   * life-cycle hook, called on deactivation
   * @param node the observed node
   */
  onDeactivation?(node: HTMLElement): void;

  /**
   * Component to use, defaults to 'div'
   */
  as?: React.ReactType,
  lockProps?: { [key: string]: any },

  /**
   * Controls focus lock working areas. Lock will silently ignore all the events from `not allowed` areas
   * @param activeElement
   * @returns {Boolean} true if focus lock should handle activeElement, false if not
   */
  whiteList?: (activeElement: HTMLElement) => boolean;

  /**
   * Shards forms a scattered lock, same as `group` does, but in more "low" and controlled way
   */
  shards?: Array<React.RefObject<any> | HTMLElement>;

  children: React.ReactNode;
}

export interface AutoFocusProps {
  children: React.ReactNode;
  className?: string;
}

export interface FreeFocusProps {
  className?: string;
}

export interface InFocusGuardProps {
  children: React.ReactNode;
}