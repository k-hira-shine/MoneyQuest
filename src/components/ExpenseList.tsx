import React from 'react';
import { Expense, SkillCategory } from '../types';

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  // カテゴリーに応じたアイコンを取得する関数
  const getCategoryIcon = (category: SkillCategory): string => {
    switch (category) {
      case SkillCategory.GROWTH:
        return '🎓';
      case SkillCategory.ENTERTAINMENT:
        return '🎉';
      case SkillCategory.LIFE:
        return '🍔';
      default:
        return '💰';
    }
  };

  // 日付をフォーマットする関数
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="rpg-card">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {expenses.map((expense) => (
          <li key={expense.id} className="py-3">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="mr-2 text-lg">{getCategoryIcon(expense.category)}</span>
                  <span className="font-medium">{expense.memo || '支出'}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formatTime(new Date(expense.date))}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">¥{expense.amount.toLocaleString()}</p>
                <p className="text-sm text-secondary">+{expense.expGained} EXP</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
