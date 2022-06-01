/* eslint-disable */
// Temporary fix for incorrect path to types inside @lezer/highlight package
declare module '@lezer/highlight' {
	import {Tree, NodeType} from '@lezer/common';
	export declare class Tag {
		readonly set: Tag[];
		static define(parent?: Tag): Tag;
		static defineModifier(): (tag: Tag) => Tag;
	}
	export declare function styleTags(spec: {
		[selector: string]: Tag | readonly Tag[];
	}): import('@lezer/common').NodePropSource;
	export interface Highlighter {
		style(tags: readonly Tag[]): string | null;
		scope?(node: NodeType): boolean;
	}
	export declare function tagHighlighter(
		tags: readonly {
			tag: Tag | readonly Tag[];
			class: string;
		}[],
		options?: {
			scope?: (node: NodeType) => boolean;
			all?: string;
		},
	): Highlighter;
	export declare function highlightTags(
		highlighters: readonly Highlighter[],
		tags: readonly Tag[],
	): string | null;
	export declare function highlightTree(
		tree: Tree,
		highlighter: Highlighter | readonly Highlighter[],
		putStyle: (from: number, to: number, classes: string) => void,
		from?: number,
		to?: number,
	): void;
	export declare const tags: {
		comment: Tag;
		lineComment: Tag;
		blockComment: Tag;
		docComment: Tag;
		name: Tag;
		variableName: Tag;
		typeName: Tag;
		tagName: Tag;
		propertyName: Tag;
		attributeName: Tag;
		className: Tag;
		labelName: Tag;
		namespace: Tag;
		macroName: Tag;
		literal: Tag;
		string: Tag;
		docString: Tag;
		character: Tag;
		attributeValue: Tag;
		number: Tag;
		integer: Tag;
		float: Tag;
		bool: Tag;
		regexp: Tag;
		escape: Tag;
		color: Tag;
		url: Tag;
		keyword: Tag;
		self: Tag;
		null: Tag;
		atom: Tag;
		unit: Tag;
		modifier: Tag;
		operatorKeyword: Tag;
		controlKeyword: Tag;
		definitionKeyword: Tag;
		moduleKeyword: Tag;
		operator: Tag;
		derefOperator: Tag;
		arithmeticOperator: Tag;
		logicOperator: Tag;
		bitwiseOperator: Tag;
		compareOperator: Tag;
		updateOperator: Tag;
		definitionOperator: Tag;
		typeOperator: Tag;
		controlOperator: Tag;
		punctuation: Tag;
		separator: Tag;
		bracket: Tag;
		angleBracket: Tag;
		squareBracket: Tag;
		paren: Tag;
		brace: Tag;
		content: Tag;
		heading: Tag;
		heading1: Tag;
		heading2: Tag;
		heading3: Tag;
		heading4: Tag;
		heading5: Tag;
		heading6: Tag;
		contentSeparator: Tag;
		list: Tag;
		quote: Tag;
		emphasis: Tag;
		strong: Tag;
		link: Tag;
		monospace: Tag;
		strikethrough: Tag;
		inserted: Tag;
		deleted: Tag;
		changed: Tag;
		invalid: Tag;
		meta: Tag;
		documentMeta: Tag;
		annotation: Tag;
		processingInstruction: Tag;
		definition: (tag: Tag) => Tag;
		constant: (tag: Tag) => Tag;
		function: (tag: Tag) => Tag;
		standard: (tag: Tag) => Tag;
		local: (tag: Tag) => Tag;
		special: (tag: Tag) => Tag;
	};
	export declare const classHighlighter: Highlighter;
}
