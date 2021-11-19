    export interface Timer {
        enabled: boolean;
        votingTime: number;
    }

    export interface WordcloudData {
        text: string;
        weight: number;
    }

    export interface Vote {
        uuid: string;
        text: string;
    }

    export interface Results {
        displayType: string;
        participantCount: number;
        votesCount: number;
        wordcloudData: WordcloudData[];
        votes: Vote[];
    }

    export interface CorrectAnswers {
        allow: boolean;
        show: boolean;
    }

    export interface Option {
        uuid: string;
        pollQuestionUuid: string;
        isCorrect: boolean;
        label: string;
        order: number;
        votesCount: number;
        votesPercentage: number;
    }

    export interface Question {
        uuid: string;
        pollUuid: string;
        inputType: string;
        title: string;
        description?: any;
        imageLayout: string;
        active: boolean;
        order: number;
        timer: Timer;
        results: Results;
        maxChars: number;
        maxCharsEnabled: boolean;
        isProfanityFilterEnabled: boolean;
        rankingPoolSize?: any;
        randomizeOptions: boolean;
        allowMultipleVotes: boolean;
        showLeaderboardAfter?: boolean;
        maxSelectableOptions?: number;
        correctAnswers: CorrectAnswers;
        options: Option[];
    }

    export interface Results2 {
        participantCount: number;
    }

    export interface QuizData {
        uuid: string;
        eventUuid: string;
        sectionUuid: string;
        presentationUuid?: any;
        speakerUuid?: any;
        active: boolean;
        votingLocked: boolean;
        showResults: boolean;
        title?: any;
        isQuiz: boolean;
        order: number;
        dateCreated: Date;
        dateUpdated: Date;
        dateActive: Date;
        questions: Question[];
        results: Results2;
        leaderboard: string;
    }