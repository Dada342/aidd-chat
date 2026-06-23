import { createMistral } from "@ai-sdk/mistral";
import { customProvider, gateway } from "ai";
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";

function getMistralProvider() {
  if (!process.env.MISTRAL_API_KEY) return null;
  return createMistral({ apiKey: process.env.MISTRAL_API_KEY });
}

export const myProvider = isTestEnvironment
  ? (() => {
      const { chatModel, titleModel } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "title-model": titleModel,
        },
      });
    })()
  : null;

export function getLanguageModel(modelId: string) {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel(modelId);
  }

  const mistral = getMistralProvider();
  if (mistral && modelId.startsWith("mistral/")) {
    return mistral(modelId.replace("mistral/", ""));
  }

  return gateway.languageModel(modelId);
}

export function getTitleModel() {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("title-model");
  }

  const mistral = getMistralProvider();
  if (mistral) {
    return mistral("mistral-large-latest");
  }

  return gateway.languageModel(titleModel.id);
}
