import React from "react";
import type { Game } from "../types";
import { isDesktop } from "../utils/browser";
import { GameCardMobileLayout } from "./GameCard/GameCardMobileLayout";
import { GameCardDesktopLayout } from "./GameCard/GameCardDesktopLayout";

type GameCardProps = {
  game: Game;
  onClick?: () => void;
  shouldShowCardContent?: boolean;
};

const GameCard: React.FC<GameCardProps> = (props) => {
  const isDesktopView = isDesktop();

  if (!isDesktopView) {
    return <GameCardMobileLayout {...props} />;
  }
  return <GameCardDesktopLayout {...props} />;
};

export default GameCard;
