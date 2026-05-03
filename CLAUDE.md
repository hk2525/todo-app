# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code (claude.ai/code) へのガイダンスを提供します。

---

## コミュニケーションルール

- ユーザーへの返答は必ず日本語で行うこと。
- コード内のコメントも日本語で記述すること。

---

## コマンド

```bash
npm install       # 依存パッケージのインストール
npm run dev       # 開発サーバー起動 (http://localhost:5173)
npm run build     # 本番ビルド (tsc && vite build)
npm run preview   # ビルド結果のプレビュー
```

---

## アーキテクチャ

React + TypeScript + Vite で構築されたシングルページのTODOアプリ。

**状態管理**: `src/hooks/useTodos.ts` がすべてのTODO操作（追加・切り替え・削除・フィルター）と localStorage への永続化を担う単一のカスタムフック。

**コンポーネント構成**:
- [src/App.tsx](src/App.tsx) — `useTodos` を呼び出し、props を子コンポーネントへ渡すルート
- [src/components/TodoInput.tsx](src/components/TodoInput.tsx) — タスク入力フォーム（ローカルの入力状態のみ保持）
- [src/components/TodoFilter.tsx](src/components/TodoFilter.tsx) — フィルター切り替え・件数表示・完了済み一括削除
- [src/components/TodoList.tsx](src/components/TodoList.tsx) — フィルタリング済みリストのレンダリング
- [src/components/TodoItem.tsx](src/components/TodoItem.tsx) — 個別タスク（チェック・削除）

**データフロー**: 単方向。`useTodos` → `App` → 各コンポーネントへコールバック渡し。外部ライブラリ不使用。
