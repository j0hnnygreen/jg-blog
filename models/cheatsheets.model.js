const TMUX = [
  {
    title: "Starting New Tmux Sessions",
    commands: [
      {
        command: "tmux",
        description: "Start a new tmux session",
        descriptionWords: "new session, tmux session, ",
      },
      {
        command: "tmux new -s [session-name]",
        description: "Sart a new session with a given session name",
        descriptionWords: "new session, tmux session, new session name, ",
      },
    ],
    descriptionWords: "new session, tmux session, new session name, ",
  },
  {
    title: "Key bindings for Tmux Sessions",
    commands: [
      {
        command: "tmux ls",
        description: "List all tmux sessions",
        descriptionWords: "list tmux sessions, list sessions",
      },
      {
        command: "ctrl b shift $",
        description: "Change the current tmux session name",
        descriptionWords: "change session name, current",
      },
      {
        command: "ctrl b d",
        description: "Dettach a tmux session",
        descriptionWords: "dettach session",
      },
      {
        command: "tmux a -t [session-name]",
        description: "Reattach a tmux session",
        descriptionWords: "reattach session",
      },
      {
        command: "ctrl b s",
        description: "Switch between 2 or more tmux sessions",
        descriptionWords: "switch",
      },
      {
        command: "ctrl b shift :",
        description: "Get into tmux prompt",
        descriptionWords: "tmux prompt mode",
      },
      {
        command: "tmux kill-session -t [session-name]",
        description: "Kill a tmux session",
        descriptionWords: "kill session",
      },
      {
        command: "tmux kill-session -t [session-name-in-use] -a",
        description: "Kill all tmux sessions except the one currently in use",
        descriptionWords: "kill sessions",
      },
      {
        command: "exit",
        description: "Exit currently selected tmux session",
        descriptionWords: "exit session",
      },
    ],
    descriptionWords:
      "tmux prompt mode, tmux sessions, exit session, kill sessions, switch session, dettach, reattach, change session name",
  },
  {
    title: "Key bindings for Tmux Panes",
    commands: [
      {
        command: 'ctrl b shift "',
        description: "Split pane vertically",
        descriptionWords: "split vertical split vertically",
      },
      {
        command: "ctrl b shift %",
        description: "Split pane horizontally",
        descriptionWords: "split horizontal split horizontally",
      },
      {
        command: "ctrl b spacebar",
        description: "Cycle/toggle between tmux layouts",
        descriptionWords: "cycle toggle",
      },
      {
        command: "ctrl b [arrow-key]",
        description: "Move to different panes",
        descriptionWords: "move to diffent panes",
      },
      {
        command: "ctrl b ;",
        description: "Move between 2 frequently used panes",
        descriptionWords: "move between frequently used",
      },
      {
        command: "ctrl b shift }",
        description: "Move the currently selected pane clockwise",
        descriptionWords: "clockwise",
      },
      {
        command: "ctrl b shift {",
        description: "Move the currently selected pane counter-clockwise",
        descriptionWords: "anti-clockwise, counter-clockwise",
      },
      {
        command: "ctrl b q",
        description: "Check pane number",
        descriptionWords: "check pane number",
      },
      {
        command: "ctrl b z",
        description: "Maximize the selected pane",
        descriptionWords: "maximize pane",
      },
      {
        command: "ctrl b x",
        description: "Kill pane",
        descriptionWords: "kill pane",
      },
    ],
    descriptionWords:
      "split pane vertically split vertical split horizontal split, horizontally split, move between frequently used, move to different panes, check pane number, cycle, toggle, maximize pane, kill pane, anti-clockwise, counter-clockwise",
  },
  {
    title: "Tmux prompt mode",
    commands: [
      {
        command:
          "swap-pane -s [source-pane-final-swap-location] -t [currently-selected-destination-pane]",
        description:
          "Move/Swap the currently selected pane and keep the currently selected pane selected after the swap",
        descriptionWords: "swap panes",
      },
      {
        command:
          "swap-pane -t [pane-to-swap-with] -s [currently-selected-pane]",
        description:
          "Swap places with another pane and select the other open pane",
        descriptionWords: "swap panes",
      },
      {
        command: "join-pane -s [window-name]",
        description: "Join two different panes with the source name",
        descriptionWords: "Join panes",
      },
      {
        command: "join-pane -t [window-name]",
        description: "Join two different panes with the destination name",
        descriptionWords: "join panes",
      },
    ],
    descriptionWords: "Swap panes, join panes",
    note: "Adding -v or -h joins horizontally or vertically respectively for join-pane",
  },
  {
    title: "Key bindings for Tmux Windows",
    commands: [
      {
        command: "ctrl b c",
        description: "Create a new empty tmux window",
        descriptionWords: "create new window",
      },
      {
        command: "ctrl b ,",
        description: "Change the currently selected window name",
        descriptionWords: "change window name",
      },
      {
        command: "ctrl b shift !",
        description: "Move the currently selected pane to it's own tmux window",
        descriptionWords: "move",
      },
      {
        command: "ctrl b p",
        description: "Move back to previous tmux window",
        descriptionWords: "previous window",
      },
      {
        command: "ctrl b n",
        description: "Move up to next tmux window",
        descriptionWords: "move to next window",
      },
      {
        command: "ctrl b w",
        description: "View and cycle between all tmux windows",
        descriptionWords: "view all cycle between windows",
      },
      {
        command: "ctrl b shift &",
        description: "Kill or completely close a tmux window",
        descriptionWords: "kill window, close window",
      },
    ],
    descriptionWords:
      "create new window, change window name, view all cycle between windows, kill window, close window, move to next window, previous window",
  },
  {
    title: "Tmux copy mode",
    commands: [
      {
        command: "ctrl b [",
        description: "Start copy mode",
        descriptionWords: "start copy mode",
      },
      {
        command: "ctrl r",
        description: "Search/grep up the wall of terminal text",
        descriptionWords: "search up",
      },
      {
        command: "ctrl s",
        description: "Search/grep down the wall of terminal text",
        descriptionWords: "search down",
      },
      {
        command: "ctrl spacebar",
        description: "Enable text highlighting to select text for copying",
        descriptionWords: "enable highlight text select text",
      },
      {
        command: "alt w",
        description: "Copy the highlighted text to tmux clipboard",
        descriptionWords: "copy to clipboard",
      },
      {
        command: "ctrl b ]",
        description: "Paste from tmux clipboard to a terminal text editor",
        descriptionWords: "paste from clipboard",
      },
      {
        command: "ctrl b shift #",
        description: "Double check what is copied to the tmux clipboard",
        descriptionWords: "check clipboard",
      },
      {
        command: "q (or) esc",
        description: "Exit out of copy mode",
        descriptionWords: "exit copy mode",
      },
    ],
    descriptionWords:
      "start copy mode, exit copy mode, check clipboard, paste from clipboard, copy to clipboard, enable highlight text select text, search up, search down",
    note: "Always start copy mode before using below key-bindings",
  },
];

module.exports = {
  TMUX,
};
