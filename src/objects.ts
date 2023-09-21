import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
}
/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const correct = question.expected.toLowerCase().trim();
    const finalAnswer = answer.toLowerCase().trim();
    return finalAnswer === correct;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        // For short-answer questions, any answer is valid.
        return true;
    } else if (question.type === "multiple_choice_question") {
        // For multiple-choice questions, the answer must be one of the options.
        return question.options.includes(answer);
    } else {
        // Handle other question types if needed.
        return false;
    }
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    // Get the first 10 characters of the name (or the whole name if it's shorter).
    const shortName = question.name.substring(0, 10);

    // Combine the id and short name with ": ".
    return `${question.id}: ${shortName}`;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    let markdown = `# ${question.name}\n${question.body}`;
    if (question.type === "multiple_choice_question") {
        for (const option of question.options) {
            markdown += `\n- ${option}`;
        }
    }
    return markdown;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    // Create a new question object with the same properties as the original question,
    // but with the updated name.
    const updatedQuestion: Question = {
        ...question, // Copy all properties from the original question
        name: newName // Update the name property with the new name
    };

    return updatedQuestion;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    // Create a new question object with the same properties as the original question,
    // but with the inverted 'published' field.
    const updatedQuestion: Question = {
        ...question, // Copy all properties from the original question
        published: !question.published // Invert the 'published' field
    };

    return updatedQuestion;
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    // Create a new question object by copying over properties from the old question.
    const duplicatedQuestion: Question = {
        id: id, // Set the new ID
        name: `Copy of ${oldQuestion.name}`, // Modify the name
        body: oldQuestion.body,
        type: oldQuestion.type,
        options: oldQuestion.options,
        expected: oldQuestion.expected,
        points: oldQuestion.points,
        published: false // Reset the published field to false
    };

    return duplicatedQuestion;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    // Create a new array containing the existing options and the new option.
    const updatedOptions = [...question.options, newOption];

    // Create a new question object with the updated options.
    const updatedQuestion: Question = {
        ...question, // Copy all properties from the original question
        options: updatedOptions // Update the options property with the new array
    };

    return updatedQuestion;
}
/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    // Create a new question object by merging information from contentQuestion and points.
    const mergedQuestion: Question = {
        id: id, // Set the new ID
        name: name, // Set the new name
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: [...contentQuestion.options], // Create a new copy of options
        expected: contentQuestion.expected,
        points: points,
        published: false // Set published to false
    };

    return mergedQuestion;
}
